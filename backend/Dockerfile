FROM hayd/deno:1.8.0

# The port that your application listens to.
EXPOSE 1993

WORKDIR /app

# Prefer not to run as root.
USER deno

# These steps will be re-run upon each file change in your working directory:
ADD . .

# These are passed as deno arguments when run with docker:
CMD ["run", "--allow-net", "--allow-read", "--allow-env", "--unstable", "main.ts"]