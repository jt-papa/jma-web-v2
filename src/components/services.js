// 'use strict';
 
//  // Globally accessible selectCategory function
//  console.log('loading');
 
//  function selectCategory(categoryId) {
//      console.log('running');
//      const categories = document.querySelectorAll('.category');
//      categories.forEach(cat => {
//          cat.classList.remove('selected');
//      });
 
//      const clickedCategory = document.getElementById(categoryId);
//      clickedCategory.classList.add('selected');
 
//      const contentId = 'content-' + categoryId.substr(-1);
//      const contents = document.querySelectorAll('.content-category');
//      contents.forEach(content => {
//          content.style.display = 'none';
//      });
 
//      const clickedContent = document.getElementById(contentId);
//      clickedContent.style.display = 'flex';
//  }
 
//  // Setup event listeners after the document has loaded
//  document.addEventListener('DOMContentLoaded', function() {
//      const categories = document.querySelectorAll('#category-container .category');
//      categories.forEach(cat => {
//          cat.addEventListener('click', function() {
//              const categoryId = this.id;
//              selectCategory(categoryId);
//          });
//      });
 
//      // Initialize with the default visible category
//      selectCategory('promo');
//  });
 

 