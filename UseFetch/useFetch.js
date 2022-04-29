import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: true });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    

    useEffect(() => {

        setState({ data: null, loading: true, error: true });
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });   
                }

            })

        return () => {
           
        }
    }, [url])

    return state;
}
