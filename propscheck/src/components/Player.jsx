import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Player({info}) {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={info.img} className='img'/>
      <Card.Body>
        <Card.Title className='name'>{info.name}</Card.Title> 
        <Card.Text className='nationality'>
          {info.nationality}
        </Card.Text>
        <Button variant="primary" className='pop'>{info.age}</Button>
        <Card.Text className='team'>
          {info.team}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player ;