module.exports = {
  apps: [
    {
      name: "shelleybp-fe",
      script: "pnpm",
      args: "run start -p 3011",
      watch: false,
      instances: 1,
      autorestart: true,
    },
  ],
};
