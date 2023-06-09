import { useState } from 'react'; 

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Card, Form, Button, ListGroup, Modal } from 'react-bootstrap';
import { BsFillPlayCircleFill, BsFillSkipEndCircleFill, BsFillSkipStartCircleFill, BsSpotify } from 'react-icons/bs'


export default function Home() {

  const [playlistCode, setPlaylistCode] = useState('');
  const [layoutIrPraPlaylist, setLayoutIrPRaPaylist] = useState(false);
  const [host, setHost] = useState(false)
  const [url, setUrl] = useState('')
  const [spotfyConectado, setSpotfyConectado] = useState(false)
  const [mostrarModal, setMostrarModal] = useState(false)

  const [playlist, setPlaylist] = useState([
    {
      url: "https://www.youtube.com/watch?v=ItKz7xfDDtY",
      service: "Youtube",
      title: "Tears Of Fire (KEEL 1986)",
      author: "Ron Keel"
    },
    {
      url: "https://www.youtube.com/watch?v=C6uqTWHzHvo",
      service: "Youtube",
      title: "Like a Stone",
      author: "Audioslave"
    },
    {
      url: "https://www.youtube.com/watch?v=tuw1ziytBDk",
      service: "Youtube",
      title: "Schism",
      author: "TOOL"
    },
    {
      url: "https://www.youtube.com/watch?v=uDtgnYZsw7A",
      service: "Youtube",
      title: "Holy Diver",
      author: "Dio - Tema"
    },{
      url: "https://www.youtube.com/watch?v=jgbf03MJyS4",
      service: "Youtube",
      title: "Burn (Remastered 2004)",
      author: "Deep Purple Official"
    },
    {
      url: "https://www.youtube.com/watch?v=V4BUn1YYWJE",
      service: "Youtube",
      title: "Pendragon - If i Were the Wind (and you were the rain)",
      author: "Gianfranco Panico"
    },
  ]);

  const acessarHub = function(){
    setLayoutIrPRaPaylist(true);
    if(playlistCode == '')
      setHost(true)
  }

  return (
    <>
      <Head>
        <title>SameTune</title>
        <meta name="description" content="Sametune, facilitando a sua vida, dono da JBL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundImage:'url(/fundo.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', height:"100vh",display: "flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{position:'fixed', top:'10px', left:'10px', display: 'flex', gap: '10px'}}>
          <Image src={'/icon.svg'} alt='SameTune logo' width={50} height={50} />
          <span style={{fontWeight:'bolder', fontSize:'30px', color:'white', margin: 'auto 0'}}>SAMETUNE</span>
        </div>
        {layoutIrPraPlaylist?
          <Card style={{width: '70%', maxHeight: '80vh', padding: '15px'}}>
            <Card.Title>Hub 1234</Card.Title>
            <Form.Control type='text' value={url} onChange={e => setUrl(e.currentTarget.value)} placeholder='Coloque o link da música aqui' />
            <div style={{margin:'5px'}}>
              {url ? 
              <>
                <p style={{marginBottom:'5px'}}> <span style={{fontWeight: 'bold'}}>Never Gonna Give You Up</span> <br/> de Rick Astley</p>
                <Button variant='primary' size='sm'>Adicionar música ao Hub</Button>
              </>

              :<></>}
            </div>
            
            <ListGroup style={{overflow: 'scroll'}}>
              {playlist.map(musica => (
              <ListGroup.Item>
                {musica.title} - {musica.author}
              </ListGroup.Item>
              ))}
            </ListGroup>
            <div>
            {
              host?
                <>
                  <div style={{display:'flex', justifyContent:'center', marginTop: '15px', alignItems: 'center', gap:'5px'}}>
                    <BsFillSkipStartCircleFill size={'2em'} color='#0d6efd'/>
                    <BsFillPlayCircleFill size={'2.5em'} color='#0d6efd'/>
                    <BsFillSkipEndCircleFill size={'2em'} color='#0d6efd'/>
                  </div>
                  <div style={{display:'flex', justifyContent:'center', marginTop:'5px'}}>
                    {spotfyConectado?<></>:<Button variant='outline-success' size='sm' onClick={()=>setMostrarModal(true)}>Conectar no <BsSpotify />?</Button>}
                  </div>
                </>
              :
                <></>
            } 
            </div>
          </Card>
        :
          <Card style={{ width:"20em" }}>
            <Card.Body>
              <Card.Title>SameTune</Card.Title>
              <Form.Control type='text' id='playlistCode' placeholder='Insira o código de hub :D' value={playlistCode} onChange={e=>setPlaylistCode(e.target.value)} />
              <Button onClick={acessarHub} style={{width:'100%', marginTop:'5px'}}>{playlistCode? "acessar Hub" :  "Ou crie um novo hub"}</Button>
            </Card.Body>
          </Card>
        }

        <Modal show={mostrarModal} onHide={() => {setSpotfyConectado(false);setMostrarModal(false)}}>
          <Modal.Header closeButton>
            <Modal.Title><BsSpotify /> Escolha o dispositivo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select aria-label="Selecione o dispositivo">
              <option>Selecione o dispositivo</option>
              <option value="1">A52 do Thomas</option>
              <option value="2">Firefox</option>
              <option value="3">Rapido a resposta é</option>
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={()=>{setSpotfyConectado(true); setMostrarModal(false)}}>Selecionar dispositivo</Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  )
}
