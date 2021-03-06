import React from 'react'
import {httpInits} from '../data/mongoHttpObj'
import ArticleList from './ArticleList.js'
import fetch, {Request} from 'node-fetch'
import {checkStatus} from '../helpers/httpStatusCheck'
import {editMiniViewOpen} from '../animation/animationController.js'
import EmailForm from './EmailForm'
import '../styles/miniview.css'

export default function Miniview(props) {
   return (
      <React.Fragment>
         <div className='menu-container'>
            <img id='menu-slide' src={require('../img/slide.svg')} alt='' />
            <div className='menu-content'>
               <div id='menu-articles' onClick={viewArticleList}>
                  Articles
               </div>
               <div id='menu-options' onClick={showWarning}>
                  Options
               </div>
               <div id='menu-email' onClick={viewEmailForm}>
                  Email
               </div>
            </div>
         </div>
         <ArticleList articles={props.articles} />
         <div className='options-warning'>
            <span className='close' onClick={closeWarning}>
               &times;
            </span>
            <span>Delete your options and start fresh?</span>
            <span>Your current topics are {props.options.text.toLowerCase()}</span>
            <div>
               <button id='options-yes' onClick={clearOptions}>
                  Yes
               </button>
               <button id='options-no' onClick={closeWarning}>
                  No
               </button>
            </div>
         </div>
         <EmailForm articles={props.articles} />
      </React.Fragment>
   )

   function viewArticleList(e) {
      editMiniViewOpen('#my-articles > div > a')
      document.getElementById('my-articles').style.display = 'flex'
   }
   function showWarning(e) {
      e.preventDefault()
      document.getElementsByClassName('options-warning')[0].style.display = 'flex'
   }
   function closeWarning() {
      document.getElementsByClassName('options-warning')[0].style.display = 'none'
   }
   function viewEmailForm(e) {
      document.getElementById('email-form').style.display = 'flex'
   }
   function clearOptions(e) {
      e.preventDefault()
      fetch(
         new Request(
            `${window.location.origin}/mynews/delete/${JSON.parse(window.localStorage.getItem('myNewsOptions')).id}`,
            httpInits().DELETE
         )
      )
         .then(checkStatus)
         .catch((err) => {
            console.error(err.statusText)
         })

      window.localStorage.removeItem('myNewsOptions')
      window.localStorage.removeItem('firstTime')
      document.location.replace('/')
   }
}
