/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// function strDes(a, b) {
//     if (a.value > b.value) return 1
//     else if (a.value < b.value) return -1
//     else return 0
// }



// JQ版本
// (function () {
//     $('.listBox').each(function () {
//         var $listBox = $(this)
        
//         // 搜尋尋找option
//         $listBox.find('.searchLeftInput').on('input', function () {
//             var searchValue = $(this).val().trim().toLowerCase()
                
//             $listBox.find('.leftBox option').each(function () {
//                 var optionText = $(this).text().toLowerCase()
//                 if (optionText.indexOf(searchValue) === -1) {
//                     $(this).addClass('hide')
//                 }else {
//                     $(this).removeClass('hide')
//                 }
//             })
//         })

//         $listBox.find('.searchRightInput').on('input', function () {
//             var searchValue = $(this).val().trim().toLowerCase()
                
//             $listBox.find('.rightBox option').each(function () {
//                 var optionText = $(this).text().toLowerCase()
//                 if (optionText.indexOf(searchValue) === -1) {
//                     $(this).addClass('hide')
//                 }else {
//                     $(this).removeClass('hide')
//                 }
//             })
//         })

//         // 點擊按鈕功能
//         $listBox.find('.btnRight').click(function (e) {
//             var selectedOpts = $listBox.find('.leftBox option:selected')
//             if (selectedOpts.length === 0) {
//                 alert('未選擇人員')
//                 e.preventDefault()
//                 return
//             }
    
//             $listBox.find('.rightBox').append(selectedOpts.clone())
//             sortOptions($listBox, '.rightBox')
//             selectedOpts.remove()
//             e.preventDefault()
//         })
    
//         $listBox.find('.btnAllRight').click(function (e) {
//             var selectedOpts = $listBox.find('.leftBox option').not('.hide')
//             if (selectedOpts.length === 0) {
//                 alert('沒有人員')
//                 e.preventDefault()
//                 return
//             }
    
//             $listBox.find('.rightBox').append(selectedOpts.clone())
//             sortOptions($listBox, '.rightBox')
//             selectedOpts.remove()
//             e.preventDefault()
//         })
    
//         $listBox.find('.btnLeft').click(function (e) {
//             var selectedOpts = $listBox.find('.rightBox option:selected')
//             if (selectedOpts.length === 0) {
//                 alert('未選擇人員')
//                 e.preventDefault()
//                 return
//             }
    
//             $listBox.find('.leftBox').append(selectedOpts.clone())
//             sortOptions($listBox, '.leftBox')
//             selectedOpts.remove()
//             e.preventDefault()
//         })
    
//         $listBox.find('.btnAllLeft').click(function (e) {
//             var selectedOpts = $listBox.find('.rightBox option').not('.hide')
//             if (selectedOpts.length === 0) {
//                 alert('沒有人員')
//                 e.preventDefault()
//                 return
//             }
    
//             $listBox.find('.leftBox').append(selectedOpts.clone())
//             sortOptions($listBox, '.leftBox')
//             selectedOpts.remove()
//             e.preventDefault()
//         })

//         // 排序
//         function sortOptions($listBox, boxClass) {
//             var $options = $listBox.find(boxClass + ' option')
            
//             $options.sort(function(a, b) {
//                 return $(a).text().localeCompare($(b).text())
//             })
            
//             $listBox.find(boxClass).empty().append($options)
//         }
//     })
// }(jQuery))





// JS版本
(function () {
    document.querySelectorAll('.listBox').forEach(function (listBox) {
        var searchLeftInput = listBox.querySelector('.searchLeftInput')
        searchLeftInput.addEventListener('input', function () {
            var searchValue = searchLeftInput.value.trim().toLowerCase()

            listBox.querySelectorAll('.leftBox option').forEach(function (opt) {
                var optionText = opt.textContent.toLowerCase()
                if (optionText.indexOf(searchValue) === -1) {
                    opt.classList.add('hide')
                } else {
                    opt.classList.remove('hide')
                }
            })
        })

        var searchRightInput = listBox.querySelector('.searchRightInput')
        searchRightInput.addEventListener('input', function () {
            var searchValue = searchRightInput.value.trim().toLowerCase()

            listBox.querySelectorAll('.rightBox option').forEach(function (opt) {
                var optionText = opt.textContent.toLowerCase()
                if (optionText.indexOf(searchValue) === -1) {
                    opt.classList.add('hide')
                } else {
                    opt.classList.remove('hide')
                }
            })
        })

        listBox.querySelector('.btnRight').addEventListener('click', function (e) {
            var selectedOpts = listBox.querySelectorAll('.leftBox option:checked')
            if (selectedOpts.length === 0) {
                alert('未選擇人員')
                e.preventDefault()
                return
            }

            var rightBox = listBox.querySelector('.rightBox')
            selectedOpts.forEach(function (opt) {
                rightBox.appendChild(opt.cloneNode(true))
            })

            sortOptions(listBox, '.rightBox')
            selectedOpts.forEach(function (opt) {
                opt.remove()
            })

            e.preventDefault()
        })

        listBox.querySelector('.btnAllRight').addEventListener('click', function (e) {
            var selectedOpts = listBox.querySelectorAll('.leftBox option:not(.hide)')
            if (selectedOpts.length === 0) {
                alert('沒有人員')
                e.preventDefault()
                return
            }

            var rightBox = listBox.querySelector('.rightBox')
            selectedOpts.forEach(function (opt) {
                rightBox.appendChild(opt.cloneNode(true))
            })

            sortOptions(listBox, '.rightBox')
            selectedOpts.forEach(function (opt) {
                opt.remove()
            })

            e.preventDefault()
        })

        listBox.querySelector('.btnLeft').addEventListener('click', function (e) {
            var selectedOpts = listBox.querySelectorAll('.rightBox option:checked')
            if (selectedOpts.length === 0) {
                alert('未選擇人員')
                e.preventDefault()
                return
            }

            var leftBox = listBox.querySelector('.leftBox')
            selectedOpts.forEach(function (opt) {
                leftBox.appendChild(opt.cloneNode(true))
            })

            sortOptions(listBox, '.leftBox')
            selectedOpts.forEach(function (opt) {
                opt.remove()
            })

            e.preventDefault()
        })

        listBox.querySelector('.btnAllLeft').addEventListener('click', function (e) {
            var selectedOpts = listBox.querySelectorAll('.rightBox option:not(.hide)')
            if (selectedOpts.length === 0) {
                alert('沒有人員')
                e.preventDefault()
                return
            }

            var leftBox = listBox.querySelector('.leftBox')
            selectedOpts.forEach(function (opt) {
                leftBox.appendChild(opt.cloneNode(true))
            })

            sortOptions(listBox, '.leftBox')
            selectedOpts.forEach(function (opt) {
                opt.remove()
            })

            e.preventDefault()
        })

        function sortOptions(listBox, boxClass) {
            var options = Array.from(listBox.querySelectorAll(boxClass + ' option'))
            options.sort(function (a, b) {
                return a.textContent.localeCompare(b.textContent)
            })

            var targetBox = listBox.querySelector(boxClass)
            targetBox.innerHTML = ''
            options.forEach(function (opt) {
                targetBox.appendChild(opt)
            })
        }
    })
})()
