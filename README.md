# Are We Down?

![Screenshot of AreWeDown?](https://github.com/shukriadams/arewedown/blob/master/screenshot.PNG)

*Are We Down?* is a simple uptime monitoring system and dashboard. It is ideal for the home/self-hosting user who runs multiple services/networked devices on a private LAN, and who doesn't want the complexity of  an enterprise-level monitoring system.

[![codecov](https://codecov.io/gh/shukriadams/arewedown/branch/develop/graph/badge.svg?token=DXO5XYWW2T)](https://codecov.io/gh/shukriadams/arewedown)

## Features 

- Simple to configure with just a few lines of text in a single YML file. 
- No databases or dependencies on other services
- Tests HTTP status, along with a growing list of other useful queries.
- Sends alerts via email (SMTP), Slack and others coming.
- Can be extended with your own test scripts using shell scripts, Javascript (NodeJS) or Python3 scripts.
- Runs on x86 and ARM (Docker containers are built for both) 
- Runs on low-spec hardware like the Raspberry Pi 3.
- Built-in dashboard will run on almost any browser, ideal for a Raspberry Pi in kiosk mode. 

*NOTE:*

- Never expose *Are We Down?* to the public internet - use it behind a firewall/router at all times! 
- *Are We Down?* is currently not supported or tested on Windows.

## Install

If you're on Linux (including Raspbian) and have Docker installed, check out the [Docker installation guide](/docs/install-docker.md).

If you're on Linux and don't want to use Docker, you can grab a standalone executable under [releases](https://github.com/shukriadams/arewedown/releases) (these are still experimental).

If you want to install the app from source, try the [NodeJS install guide](/docs/install-nodejs.md).

## Config

For complete settings, check the [advanced settings guide](/docs/advanced-settings.md).

`Settings.yml` Is divided up into 3 main sections. 

    transports:
        ...

    recipients:
        ...

    watchers:
        ....

### Transports

Transports are used to send out alerts when watcher states change. 

#### SMTP Transport

You can send email using any SMTP server. To use a Gmail account try

    transports:
        smtp:
            server : smtp.gmail.com
            port : 465
            secure : true
            user : your-user@gmail.com
            pass: your-gmail-password
            from : your-user@gmail.com

### Recipients

Recipients are people who receive alerts. To send alerts using the `smtp` transport use

    recipients:
        BobMcName:
            smtp: bob@example.com
        FaceFacersson:
            smtp: face@example.com

### Watchers

Watchers watch things to see if they are passing or failing. 

#### Default watcher settings

- Watchers have a default interval of 1 minute. You can override any watcher's default with any valid cronmask (masks must be in quotes, this is a YML quirk).
- The YML node is the default name of a watcher. You can provide an display name using the optional `name` field.
- Watchers, like most other objects in *AreWeDown?* have an optional `enabled` field that defaulst to true. Set this to false to disable the watcher.
- To alert specific people about a watcher failure, use `recipients` - this is an optional, comma-separated list of names defined under the top-level `recipients` section. If left empty, all recipients will receive alerts for that watcher.

        watchers:
            mytest:
                # give it fancier name with spaces
                name : my fancy test name!
                # run it on a Tuesday only
                interval: '0 0 * * TUE'
                # don't run it at all
                enabled: false
                # send alerts to these recipients only
                recipients: BobMcName,someOtherPerson,YetAnotherPerson

#### Watcher tests

There are several built-in tests 

- HTTP status
- TCP Port open
- Docker container up
- Jenkins job passing

Check the [built-in tests guide](/docs/built-in-tests.md) for details on how to configure these.

You can also write tests in bash, NodeJS or Python3 if you're more into that sort of thing. There's [a guide for custom code tests](/docs/custom-tests.md) too.

## Interested in contributing?

Please check [contributing](/docs/contributing.md).

## License

[MIT](https://github.com/shukriadams/arewedown/blob/master/LICENSE)


