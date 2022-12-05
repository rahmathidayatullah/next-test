/* eslint-disable consistent-return */

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  res.status(200);
  res.json({
    message: 'success',
    data: {
      configMessage: req.cookies.configMessage
        ? JSON.parse(req.cookies.configMessage)
        : null,
    },
  });
}
