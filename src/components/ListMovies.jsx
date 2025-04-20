import axios from "axios";
import React, {useState, useEffect} from "react";
import styles from './ListMovies.module.css';
import Modal from "./Modal/Modal";
import Card  from "./Card/Card";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ListMovies(){

    // mostra se foi selecionado um filme para a visualização
    const [selectdMovie, setSelectdMovie] = useState(null); // variável
    // crio uma variavel chamada movie, e "seto" o estado dela como vazio
    const [movies, setMovie] = useState([]); // lista

    const [selectdSerie, setSelectdSerie] = useState(null); // variável
    const [series, setSeries] = useState([]); // lista

    const API_key = '499c2201cdc0d58443f51cc7ae480209';
    const API_url = 'https://api.themoviedb.org/3';

    // Efect trabalha com uma estrutura especifica parametros(), script{} e dependencias[]
    useEffect(() => {
        axios.get(`${API_url}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response =>{
                console.log(response.data.results);
                setMovie(response.data.results)
            })
            .catch(error => {
                console.log('Error', error);
            })
    }, []);

    useEffect(() => {
      axios.get(`${API_url}/tv/popular?api_key=${API_key}&language=pt-BR`)
          .then(response =>{
              console.log(response.data.results);
              setSeries(response.data.results)
          })
          .catch(error => {
              console.log('Error', error);
          })
  }, []);

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const handleOpenModal = (movie) => {
        setSelectdMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectdMovie(null);
    };

    return(
      <div className={styles.containerFundo}>
        <h2>Filmes recomendados para você</h2>
        <Slider {...settings}>
          {movies.map(movie => (
            <Card key={movie.id} 
                movie={movie} 
                onOpenModal={handleOpenModal} 
                link={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            ))}
        </Slider>
        {selectdMovie && (<Modal movie={selectdMovie} onClose={handleCloseModal} />)}

        <h2>Séries recomendados para você</h2>
        <Slider {...settings}>
          {series.map(serie => (
            <Card key={serie.id} 
                movie={serie} 
                onOpenModal={handleOpenModal} 
                link={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}/>
            ))}
        </Slider>
        {selectdSerie && (<Modal serie={selectdSerie} onClose={handleCloseModal} />)}
      </div>
    )
}