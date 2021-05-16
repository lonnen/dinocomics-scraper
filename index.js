const fetch = require('sync-fetch');
const cheerio = require('cheerio');

const serializeComic = (bq) => {
  const label = bq.children[0].children[0];
  let title = '';
  if (label.children[0]) {
    // some of these, especially early ones, don't have titles
    title = label.children[0].data;
  }
  const url = label.attribs.href;
  const text = bq.children[1].data;
  const id = parseInt(url.split('=')[1], 10);
  return {
    title,
    text,
    url,
    id,
  };
};

const comics = [];
let urlTemplate;

for (let page = 1; page < 206; page += 1) {
  urlTemplate = `http://www.ohnorobot.com/index.php?self=1&page=${page}&s=%25s&comic=23`;
  const $ = cheerio.load(fetch(urlTemplate).text());
  const blockquotes = $('ul > li > blockquote');
  comics.sort((a, b) => a.id - b.id);

  /// `apply` chokes after 65536 arguments, so this will break somewhere near
  /// the comic's tricentennial anniversary. It may be worth finding a more
  /// efficient pattern before this time, or maybe the core JS engine will
  /// raise this limit to buy us some time.
  Array.prototype.push.apply(comics, Array.prototype.map.call(blockquotes, serializeComic));
}

console.log(JSON.stringify(comics, null, 2));
