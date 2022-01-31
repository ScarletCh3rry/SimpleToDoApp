import {useEffect, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../utils/pages";
import MyBtn from "../Components/UI/button/MyBtn";
import MyModal from "../Components/UI/MyModal/MyModal";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import PostList from "../Components/PostList";
import Pagination from "../Components/UI/pagintaion/Pagination";
import Loader from "../Components/UI/loader/Loader";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../Components/UI/select/MySelect";

const Posts = () => {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({query: '', sort: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit));
    })
    const lastElement = useRef()

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const changePage = (page) =>{
        setPage(page)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
        <div className="App">
            <div className='search__container'>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>
                <PostFilter filter={filter} setFilter={setFilter}/>
                <MyBtn onClick={() => setModal(true)}>
                    Create post
                </MyBtn>
            </div>
            {/*<MySelect*/}
            {/*    value={limit}*/}
            {/*    onChange={value => setLimit(value)}*/}
            {/*    defaultValue='Amount of posts'*/}
            {/*    options={[*/}
            {/*        {value: 5, name: '5'},*/}
            {/*        {value: 10, name: '10'},*/}
            {/*        {value: 25, name: '25'},*/}
            {/*        {value: -1, name: 'Show all posts'}*/}
            {/*    ]}*/}
            {/*/>*/}
            {postError &&
            <h1>Error ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Post List'/>
            <div ref={lastElement} style={{height: 30}}/>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '70px'}}><Loader/></div>
            }
            {/*<Pagination page={page} changePage={changePage} totalPages={totalPages}/>*/}

        </div>
    )
}

export default Posts;
