import { useState } from 'react'; 

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { Card, Form, Button, ListGroup } from 'react-bootstrap';


export default function Home() {

  const [playlistCode, setPlaylistCode] = useState('');
  const [layoutIrPraPlaylist, setLayoutIrPRaPaylist] = useState(false);
  const [url, setUrl] = useState('')

  const [playlist, setPlaylist] = useState([
    {
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },
    {
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },{
      url: "www.pudim.com.br",
      service: "Spotify",
      title: "Titulo 1",
      author: "IEU"
    },
    {
      url: "www.pudim.com.br",
      service: "YouTube",
      title: "Titulo 2",
      author: "EU MSM"
    },
  ]);

  const acessarHub = function(){
    setLayoutIrPRaPaylist(true);
  }

  /*
  
url
Nome/titulo (YT: items[0].snippet.title  |  SF: )
autor/canal (YT: items[0].snippet.channelTitle  |  SF: )
servico

  */

  return (
    <>
      <Head>
        <title>SameTune</title>
        <meta name="description" content="Sametune, facilitando a sua vida, dono da JBL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundImage:'url(/fundo.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', height:"100vh",display: "flex", justifyContent:"center", alignItems:"center"}}>
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
              
            </div>
          </Card>
        :
          <Card style={{ width:"20em" }}>
            <Card.Body>
              <Card.Title>SameTune</Card.Title>
              <Form.Control type='text' id='playlistCode' placeholder='Insira o código de hub :D' value={playlistCode} onChange={e=>setPlaylistCode(e.target.value)} />
              <Button onClick={acessarHub}>{playlistCode? "acessar Hub" :  "Ou crie um novo hub"}</Button>
            </Card.Body>
          </Card>
        }
      </main>
    </>
  )
}
