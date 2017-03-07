import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-arond',
    },
    gridList: {
        width: 1000,
        height: 950,
        overflowY: 'auto',
    },
};

export default class Gallery extends Component {
    render() {
        return  (
            <div style={styles.root}>
                <GridList
                    cols={5}
                    cellHeight={180}
                    style={styles.gridList}
                    padding={1}
                    style={styles.gridList}
                >

                {
                    this.props.items.map((item, index) => {
                        let { title, imageLinks, infoLink } = item.volumeInfo;
                        return (
                            <GridTile
                                key={index}
                                title={title}
                                subtitle={infoLink}
                                actionPosition='left'
                                titlePosition='top'
                                titleBackground='linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)'
                            >
                                <img 
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : ''}
                                    alt='book image'
                                />
                            </GridTile>
                        );
                    })
                }
                </GridList>
            </div>
        )
    }

}
