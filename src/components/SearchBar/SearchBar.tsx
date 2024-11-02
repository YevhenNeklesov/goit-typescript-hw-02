import s from "./SearchBar.module.css";
import { Formik, Form, Field } from 'formik';
import toast from "react-hot-toast";


interface SearchBarProps {
    setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setQuery }) => {
    const initialValues = {
        query: '',
    };

    const handleSubmit = (values: { query: string }) => {
        if (!values.query) {
            toast("Need to fill the field", {
                duration: 400,
                position: 'top-right',
            });
            return;
        }
        setQuery(values.query);
    };

    return (
        <div className={s.container}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <button className={s.btn} type='submit'>
                        <svg 
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
                        </svg>
                    </button>
                    
                    <Field
                        className={s.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        name='query' 
                    />
                </Form>
            </Formik>
        </div>
    );
};

export default SearchBar;