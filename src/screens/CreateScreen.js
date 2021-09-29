import React, { useContext } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    
    const { addBlogPost } = useContext(Context);

    return <BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
    }} />;
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 5,
        marginBottom: 15
    },
    label: {
        marginLeft: 10,
        marginBottom: 5,
        fontSize: 20
    }
});

export default CreateScreen;