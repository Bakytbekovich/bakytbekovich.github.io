import { Avatar, Button, Comment, Form, Input, List } from 'antd';
import moment from 'moment';
import 'moment/locale/ru'; 
import React, { useState } from 'react';
import { users } from "../api";
import { useEffect } from "react";
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';
const { TextArea } = Input;
const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(props) => <Comment {...props} />}
    />
);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Коментировать
            </Button>
        </Form.Item>
    </>
);
const Comments = () => {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState('');
    const [userProperty, setUserProperty] = useState(null);
    const local = localStorage.getItem('token');
    const userDetails = () => {
        const user = users.filter(i => i.id == local);
        if (user.length > 0) {
            setUserProperty(user[0]);
        }
    }
    useEffect(() => {
        userDetails();
    }, [])
    const handleSubmit = () => {
        if (!value) return;
        setSubmitting(true);
        let date = new Date().getDate();
        let month = new Date().getMonth();
        month += 1;
        let year = new Date().getFullYear();
        let hour=new Date().getHours();
        let min=new Date().getMinutes();
        let sec=new Date().getSeconds();
        setTimeout(() => {
            setSubmitting(false);
            setValue('');
            setComments([
                ...comments,
                {
                    author: userProperty.fullname,
                    avatar: userProperty.avatar,
                    content: <p>{value}</p>,
                    datetime: moment(year+"-"+month+"-"+date+","+hour+":"+min+":"+sec).fromNow(),
                },
            ]);
        }, 1000);
    };
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    
    return (

        <>
           
                
                               
                        {comments.length > 0 && <CommentList comments={comments} />}
                        <Comment
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                            content={
                                <Editor
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                    submitting={submitting}
                                    value={value}
                                />
                            }

                        />
                  
             
        </>
    );
};
export default Comments;