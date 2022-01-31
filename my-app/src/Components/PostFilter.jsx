import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div style={{width: '80%'}}>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск:'
            />
            {/*<MySelect*/}
            {/*    value={filter.sort}*/}
            {/*    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}*/}
            {/*    defaultValue='Sort'*/}
            {/*    options={[*/}
            {/*        {value: 'title', name: 'Title sort'},*/}
            {/*        {value: 'body', name: 'Description sort'},*/}
            {/*    ]}*/}
            {/*/>*/}
        </div>
    );
};

export default PostFilter;