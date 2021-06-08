#### What is it?

Template project for Vue + AWS + SST [https://slawomirstec.com/blog/2021/06/sst](https://slawomirstec.com/blog/2021/06/sst)

This project backend was bootstrapped with [Create Serverless Stack](https://docs.serverless-stack.com/packages/create-serverless-stack).

Auth module is generated with amplify CLI [https://amplify.com/](https://amplify.com/)

Frontend created with [Vue CLI](https://cli.vuejs.org/)

It is a project template to work with AWS Api Gateway + Lambda + Cognito on the backend.
On the frontend there is a Vue application with Amplify auth module and UI component. 

#### Build

Start by installing the dependencies.

```bash
$ yarn install
```

Deploy server cloudformation stack
```bash
$ yarn deploy
```

Start development with live lambda reload

```bash
$ yarn start
```

Build frontent
```bash
$ cd frontend
$ yarn install
$ yarn serve --open
```

#### How it works?

There is not much added to the initial projects generated with CLI tools.
I've integrated here passing Api URL and Cognito ids to the frontend layer.

This project is a starter template for applications where I need:

1. SST live lambda reload. Great for prototyping of lambda REST APIs.
2. Typescript lambda.
3. SST internally wraps a CDK! You provision your infrastructure with typescript.
4. Frontend is Vue + auth implemented with amplify.
