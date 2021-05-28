import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Gallery from 'react-grid-gallery';

const App = () => {
    const IMAGES1 =
    [{
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            isSelected: true,
            tags: [{value: "Token 01", title: "Token 01"}, {value: "India", title: "India"}],

            caption: "After Rain (Jeshu John - designerspics.com)"
    },
    {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
            caption: "Boats (Jeshu John - designerspics.com)"
    },
    
    {
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
            thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
            thumbnailWidth: 320,
            thumbnailHeight: 212
    }];
          
    return (
        <div>
        <BrowserRouter>
        <div className="container">
          <switch>
              <Route path="/" exact>
                <Gallery images={IMAGES1}/>
              </Route>
              <Route path="/customers"></Route>
          </switch>
        </div>
        </BrowserRouter>
        </div>
    );
}
export default App
