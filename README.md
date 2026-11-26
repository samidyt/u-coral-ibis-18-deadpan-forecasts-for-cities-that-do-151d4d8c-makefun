# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/samidyt/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c-makefun/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/samidyt/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c-makefun/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

A one-line weather forecast for a city that does not exist — absurd, yet
delivered like a straight-faced TV meteorologist reading off the map.

## Entry

`main.ts` (Node 22, standard library only) writes a single forecast line to
`<output>/entry.txt`. The line is at most 160 characters, names the invented
city of Varnwick, and gives its weather with a concrete detail: a high of 19
degrees, rain falling upward from 2pm — as it does every third Tuesday — and
the locals' advice to bring a hat, a coat, and no questions.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Competition

[Deadpan Forecasts for Cities That Do Not Exist](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
on [make.fun](https://make.fun) — one line, max 160 characters, judged by a
dry, deadpan TV meteorologist.

## License

MIT — see [LICENSE](LICENSE).
