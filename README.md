# Front-end technical test

A proof of concept of a messaging interface.

## Getting Started

### Prerequisites

- Docker
- Docker-Compose

### Installation

- Clone the repo
   ```sh
   git clone https://github.com/Timer91/frontend-technical-test
   ```
- Launch the project with Docker
   ```sh
   docker-compose up --build
   ```

### How to use

On your browser, open :  

[http://localhost:3000/messenger](http://localhost:3000/messenger)

## Project architecture

This project has been thinking in Web Components.

### Messenger page

```sh
Conversations
├─ ConversationItem
Chat
├─ Messages
│  ├─ MessageItem
├─ SendMessage
```

On this app: 
- you are logged by default with the first user (id: 1)
- the provided _json-server_ API is used for getting user's conversations and send some messages into it
- the getted conversations are listed in _Conversations_ component
- the getted messages are display on _Messages_ component
- you can send messages with _SendMessage_ component

Those components works with a main context which store the selected conversation ID.
_Conversations_ and _Chat_ components are self-reliant and responsive. Moreover, you can pass it a custom CSS class for implement it whereever you would.
Indeed, you can put the _Conversations_ component at the right of your page fix to the border, and open a _Chat_ component each time you select a conversation, like Messenger.

### What next

- [] Implement a SSO or a homemade authenticate service
- [] Implement a notification system
- [] Use socket.io library
- [] Implement a loading component like Messenger' one
- [] Implement more unit and integration tests

## Author

Jérémie ([Timer91](https://github.com/timer91)) Marais

## Acknowledgements

Thanks to LeBonCoin for giving me the opportunity to let me demonstrate my skills.
