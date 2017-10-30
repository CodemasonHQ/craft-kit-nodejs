# Craft Kit - Node.js
This is the official [craft kit](http://codemason.io/docs/craft-kits) for Node.js by [Codemason](http://codmeason.io). 

```
$ mason craft nodejs
```

Craft kits let you Dockerize your application with one command. They are an excellent way to ease into building Docker powered apps without having to learn the ins and outs of Docker.

Then with [Codemason](http://codemason.io), you can deploy your app to a server in a matter of minutes!

## Requirements 
> This guide assumes you have:
> - Installed the [Mason CLI](http://codemason.io/docs/installation)

## Configuration
You will need to ensure you update your environment variables to match what is provided in the `docker-compose.yml` file.

## Quickstart
Craft your Node.js app with Docker 
```
$ mason craft nodejs
```

Add your Docker files to source control.
```
$ git add .
$ git commit -m "Docker"
```

Spin up your development environment with Docker (add the `-d` flag to the command to run in detached mode)
``` 
$ docker-compose up
```

That's all! You're now running your Node.js application with Docker!

## Craft `--with`
You can even swap out the default services the Craft Kit uses by using the `--with` parameter. 
```
$ mason craft nodejs --with="nodejs, mongodb"
```
- Default: nodejs
- Available: mongodb

## Deployment
Deploying is just as easy with [Codemason](http://codemason.io). For more detailed instructions, see our [documentation](http://codemason.io/docs/quickstart#deploy-dreams).

Create an application on Codemason for your app
```
$ mason create --application nodejs-app
```

Push your code to your Codemason Git remote to build it into a Docker image
```
$ git push codemason master 
```

Deploy
```
$ mason deploy --to nodejs-app
```
