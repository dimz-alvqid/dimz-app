import linkData from '../../app/download/link.js';

export default function handler(req, res) {
  res.send({ list: linkData })
}
