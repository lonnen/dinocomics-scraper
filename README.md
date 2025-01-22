dinocomics-scraper
---

This script will synchronously query the ohnorobot comics search engine to pull down the title, url, and text of every published Dinosaur Comic. This can be quite hard on ohnorobot so please be careful when you use this. This is also very brittle, and it may stop working at any time.

This isn't a great way to consume the comic. In fact, at the time of authoring the ohnorobot archive is about 1000 comics behind and there is no longer a call to action to submit new transcriptions. So, for maximumum enjoyment of the comic as an artwork, please visit:

https://qwantz.com/

This script and output data set are intended to be used for working on a self-referential natural language problem embedded in [Dinosaur comics 1663](https://qwantz.com/index.php?comic=1663). Paul Stansifer has already published a semi-processed dataset suitable for investigating this [at this github repo](https://github.com/paulstansifer/qwantzle_data) that may be easier for you to use. Consider starting there.

If you need signal above and beyond that data set, including access to the ten or so years of comics published since, then this script might be useful:

usage:
```shell

$ npm install
$ node index.js > raw_dino_comics_$(date +%F).json

```

If this does break in the future and OhNoRobot is not updated, the [Dinocomics Search Page](https://www.qwantz.com/search.php) may be a good focus for a new version of this script.