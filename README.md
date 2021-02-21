# Demo application

It's demo application for demonstrating working of accelerometer sensor

If you want to test it locally, clone it, then:

```
$ npm i -d
```

for building run:

```
$ npm run build
```

for starting server:

```
$ npm run server
```

For this project important to use HTTPS connection, so if you will have problems with starting server, consider to generate your own certificate and key in `cert` folder by using commands:

```
$ cd certs
$ openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
```

It should solve most of the problems.

> To try this demo live go to:
> [accelerometer-demo](https://integervector.github.io/accelerometer-demo/)
