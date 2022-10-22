import { Modal } from "components/Backdrop/Backdrop";
import { BackdropImage } from "components/Backdrop/BackdropImage";
import { fetchImages } from "components/fetchImg";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/LoadMoreBTN/LoadMoreBTN";
import { Searchbar } from "components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import { MainSection } from "./App.styled"
import { Loader } from "components/Loader/Loader";
import { StartPicture } from "components/StartPicture/StartPicture";
import { ToTopBTN } from "components/ToTopBTN/ToTopBTN";
import Notiflix from 'notiflix';
import { SearchBox } from "components/Searchbar/SearchForm";

export const AppBox = () => {
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)
    const [images, setImages] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [largeIMG, setLargeIMG] = useState("")
    const [modalTags, setModalTags] = useState("")
    const [modalImageId, setModalImageId] = useState("")
    const [status, setStatus] = useState("idle")
    const [totalHits, setTotalHits] = useState(0)

    useEffect(() => {
        if (query === "") {
            return
        }
        setStatus("pending")
    }, [query])

    useEffect(() => {
        if (query === "") {
            return
        }
        fetchImages(query, page)
            .then(res => {
                const results = res.data.hits
                setImages(images => ([...images, ...results]))
                setTotalHits(res.data.totalHits)
                setStatus("resolved")
                if (results.length === 0) {
                    Notiflix.Notify.failure('There is no images about your query. try something else, please')
                }
            })
            .catch(error => {
                setStatus("rejected")
                Notiflix.Notify.failure(error)
            })
    }, [query, page])

    const submitInfo = (evt) => {
        evt.preventDefault()
        if (evt.target.elements.query.value === "") {
            Notiflix.Notify.failure('Please, enter search query');
        }
        setQuery(evt.target.elements.query.value)
        setPage(1)
        setImages([])
    }

    const loadMore = page => {
        setPage(page => (page+1))
    }

    const toggleModal = (evt) => {
        setShowModal(!showModal)
    }

    const openLargeImage = evt => {
        toggleModal()
        setLargeIMG(evt.target.dataset.src)
        setModalTags(evt.target.alt)
        setModalImageId(evt.target.dataset.id)
    }

    const backToTop = () => {
        const timer = () => {window.scrollBy(0, -300);}
        const interval = setInterval(timer, 10)
        setTimeout(() => {
            clearInterval(interval)
        }, 1000);
    }

        return (
            <>
                <Searchbar>
                    <SearchBox onSubmit={submitInfo}/>
                </Searchbar>

                {status === "pending" &&
                    <Loader/>}
                
                <MainSection>

                    {status === "idle" && 
                        <StartPicture/>}
                    
                    {status === "resolved" && 
                        <ImageGallery imageArr={images} openLarge={openLargeImage} />}
                    
                    {images.length !== 0 &&
                        <ToTopBTN backToTop={backToTop}/>}
                    
                    {images.length !== 0 && images.length !== totalHits &&
                        <Button onPage={loadMore} />}
                    
                </MainSection>

                {showModal && 
                    <Modal onClose={toggleModal}>
                        <BackdropImage key={modalImageId} largeIMG={largeIMG} modalTags={modalTags}/>
                    </Modal> }
            </>
        )
    }
