export default function handler(req, res) {
    const coordinates = {
        lng: 19.0532484,
        lat: 47.4986567,
    };
  
    res.status(200).json(coordinates);
  }