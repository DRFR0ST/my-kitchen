import React, { useMemo, useState, useEffect } from "react";
import Modal from 'react-modal';
import { createUseStyles } from "react-jss";
import styles from "./styles";
import { usePosts } from "api/Post";
import { Flex, SlimCard } from "components/shared";
import Masonry from 'react-masonry-component';
import EmptyState from "assets/empty.svg";
import { useMediaQuery } from "@react-hook/media-query";


const useStyles = createUseStyles(styles);



const SearchInput = ({ open, onClose, className, overlayClassName, bodyOpenClassName }: { open: boolean, onClose: () => void, className?: string, bodyOpenClassName?: string, overlayClassName?: string }) => {
    const [search, setSearch] = useState("");
    const classes = useStyles();
    const posts = usePosts();
    const isMobile = useMediaQuery('only screen and (max-width: 620px)')

    useEffect(() => {
        setSearch("");
    }, [open]);

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            if(!search) return false;
            if(post.id.includes(search)) return true;
            if(post.title.includes(search)) return true;
            if(post.topics.find(topic => topic.label.includes(search) || topic.id.includes(search))) return true;
            return false;
        })
    }, [posts, search]);


    const handleAfterOpen = () => {
        console.log("After Open triggered!")
    }

    const handleClose = () => {
        onClose && onClose()
    }

    const handleChange = (event: any) => {
        const value = event.target.value;

        setSearch(value);
    }

    const modalStyle = {
        content: { backgroundColor: "transparent", border: 0, zIndex: 9999, overflow: "hidden", width: "90%", left: 0 }, 
        overlay: { zIndex: 9998, backgroundColor: "rgba(0, 0, 0, 0.35)" }
    }

    return <Modal
        isOpen={open}
        onAfterOpen={handleAfterOpen}
        onRequestClose={handleClose}
        className={className}
        overlayClassName={overlayClassName}
        bodyOpenClassName={bodyOpenClassName}
        style={modalStyle}
        contentLabel="Example Modal"
    >
        <div style={{width: isMobile ? "100%" : "60%", margin: "0 auto"}}>
            <div className={classes.inputWrapper}>
                <input autoFocus value={search} onChange={handleChange} placeholder="Search" className={classes.input} />
            </div> 
            <div className={classes.outputWrapper}>
                {filteredPosts.length > 0 ? 
                    <Masonry style={{ position: "relative" }}>
                        { filteredPosts.map(post => <SlimCard key={post.id} onClick={handleClose} {...post} />) }
                    </Masonry>
                    :   <Flex justifyContent="center" alignItems="center" className={classes.empty}>
                            <img src={EmptyState} alt="empty-state" />
                        </Flex> 
                }
            </div>
        </div>
    </Modal>
}


export default SearchInput;