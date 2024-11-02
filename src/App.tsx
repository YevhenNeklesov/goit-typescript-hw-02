import React, { useEffect, useState } from 'react';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import { fetchArticles } from './servis/api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessege/ErrorMessege';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { Article } from './servis/types';


const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(query, page);
        if (!data.results.length) {
          toast("Sorry we have no image by your search", {
            duration: 400,
            position: 'top-right',
          });
        }
        setArticles(prev => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleNextPage = () => {
    try {
      setPage(prev => prev + 1);
      setIsLoading(true);
      setTotalPages(0);
    } catch {
      setIsError(true);
    }
  };

  const handleSetQuery = (searchValue: string) => {
    setQuery(searchValue);
    setArticles([]);
    setPage(1);
  };

  const openModal = (item: Article) => {
    setIsOpen(true);
    setSelectedArticle(item);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedArticle(null);
  };

  return (
    <>
      <div>
        <SearchBar setQuery={handleSetQuery} />
        {articles.length > 0 && (
          <ImageGallery openModal={openModal} articles={articles} />
        )}
        {isLoading && <Loader />}
        {isError && <ErrorMessage />}
        {page < totalPages && <LoadMoreBtn load={handleNextPage} />}
        {modalIsOpen && ( selectedArticle &&
          <ImageModal
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            article={selectedArticle}
          />
        )}
        <Toaster />
      </div>
    </>
  );
};

export default App;
