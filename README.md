This is a soft fork of the [gamja](https://codeberg.org/emersion/gamja) IRC web
client. We made a few small changes for the [rx](https://irc.runxiyu.org) IRC
network. A public instance is available at <https://gamja.irc.andrewyu.org>.

The upstream README is below.

---

# [gamja]

A simple IRC web client.

![screenshot](https://l.sr.ht/7Npm.png)

## Usage

Requires an IRC WebSocket server.

First install dependencies:

    npm install --production

Then [configure an HTTP server] to serve the gamja files.

### Development server

If you don't have an IRC WebSocket server at hand, gamja's development server
can be used. For instance, to run gamja on Libera Chat:

    npm install --include=dev
    npm start -- irc.libera.chat

See `npm start -- -h` for a list of options.

### Production build

Optionally, [Parcel] can be used to build a minified version of gamja.

    npm install --include=dev
    npm run build

## Configuration

gamja can be configured via a [configuration file] and via [URL parameters].

## Contributing

Send patches on the [mailing list], report bugs on the [issue tracker]. Discuss
in [#soju on Libera Chat].

## License

AGPLv3, see LICENSE.

Copyright (C) 2020 The gamja Contributors

[gamja]: https://sr.ht/~emersion/gamja/
[mailing list]: https://lists.sr.ht/~emersion/public-inbox
[issue tracker]: https://todo.sr.ht/~emersion/gamja
[Parcel]: https://parceljs.org
[configure an HTTP server]: doc/setup.md
[configuration file]: doc/config-file.md
[URL parameters]: doc/url-params.md
[#soju on Libera Chat]: ircs://irc.libera.chat/#soju
