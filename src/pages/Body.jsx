import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Body = () => {
  return (
    <>
    <div className="cuerpo-principal">
      <section className="explicacion1">
        <div className='content1'>
          <h1 className='cuerpo-principal__titulo'>What is learn war?</h1>
          <p>Learn War is a tool for your own practice , we use a IA for help you in your process , showing where you need to improve</p>
          <button className='btn2'> Try now </button>
          <button > I have a accont</button>    
         
          <div className="arrow">
          <a href=""><span></span></a>
          </div>

        </div>       
      </section>


      <section className='explicacion2'>
            <h2 className='cuerpo-principal__subtitulo' > ¿ Why you love practice with LearnWar ?</h2>
            <div className="cuerpo-principal__contenido">
              <articles className="cuerpo-principal__articulos">
                  <img src="../img/target.png" alt="" className='cuerpo-principal__icons' />
                  <h3>Simple and effective</h3>
                  <p> A simple and effective structure that will facilitate the understanding of your topics </p>
              </articles>
            
              <articles className="cuerpo-principal__articulos">
                <img src="../img/intel.png" alt="" className='cuerpo-principal__icons' />
                  <h3> IA Trainer </h3> 
                  <p> 
                  We learn from you and we will help you reinforce your knowledge  </p>
              </articles>


              <articles className="cuerpo-principal__articulos">
              <img src="../img/success.png" alt="" className='cuerpo-principal__icons' />
                 <h3>Track your progress</h3>
                 <p>
                    Know your progress in your favorite topics</p>
              </articles>
              
            </div>
                
      </section>
      <section>
      
      </section>
      
      <section className='equipo'>
      <div className='line'></div>
        <h1>Dev Team</h1>
       
        <div className="equipo__contenedor">
          <article className='equipo__integrantes'>
            <img src="../img/alejandro_giraldo.JPG" alt="" className='cuerpo-principal__foto' />
            <div className="cuerpo-principal__informacion-personal">
              <h4>Alejandro Giraldo</h4>
              <p>Datascience , Backend dev , IA  </p>

              <div className="cuerpo-principal___contenedor-redes">
              <img src="../img/instagram.png" alt=""  className='cuerpo-principal__redes'/>
              <img src="../img/linkedin.png" alt=""  className='cuerpo-principal__redes'/>
              <img src="../img/github.png" alt=""  className='cuerpo-principal__redes'/>
            </div>
            </div>
            
          </article>

          <article className='equipo__integrantes'>
            <img src="../img/miguel_giraldo.png" alt="" className='cuerpo-principal__foto' />
            <div className="cuerpo-principal__informacion-personal">
              <h4>Miguel Angel</h4>
              <p>Web dev</p>
              <div className="cuerpo-principal___contenedor-redes">
              <img src="../img/instagram.png" alt=""  className='cuerpo-principal__redes'/>
              <img src="../img/linkedin.png" alt=""  className='cuerpo-principal__redes'/>
              <img src="../img/github.png" alt=""  className='cuerpo-principal__redes'/>
            </div>

            </div>
          
          </article>

        </div>
          
      </section>
      <Outlet/>
    </div>

    </>
  )
}
