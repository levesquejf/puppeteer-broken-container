# Puppeteer breaking container bug

There is an issue with docker and balena-engine when puppeteer starts chrome with `--disk-cache-dir=/dev/null`. The puppeteer script is working fine but the container seems to be broken after the execution. The three symptoms of the broken container are:

- Unable to login to the app container on Balena-Cloud: `read init-p: connection reset by peer`
- `lsof` output is empty
- `apt-get update` hangs at "Waiting for headers"

## Usage

`./docker-run.sh` will display `lsof result is empty. Container is broken :-(` if the container is broken.
