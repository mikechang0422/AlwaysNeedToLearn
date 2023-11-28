/* eslint-disable no-undef */
// JQ版本
// $(document).ready(function () {
//     setupSelectGroups()
// })

// function setupSelectGroups() {
//     $('.select-group').each(function () {
//         var $selectGroup = $(this)
//         var $startSelect = $selectGroup.find('.start-select')
//         var $endSelect = $selectGroup.find('.end-select')

//         $startSelect.on('change', function () {
//             handleEndSelectOptions($startSelect, $endSelect)
//         })

//         $endSelect.on('change', function () {
//             handleStartSelectOptions($startSelect, $endSelect)
//         })
//     })
// }

// function handleEndSelectOptions($startSelect, $endSelect) {
//     var selectedValue = parseInt($startSelect.val())
//     $endSelect.find('option').each(function () {
//         var optionValue = parseInt($(this).val())
//         if (optionValue < selectedValue) {
//             $(this).addClass('hide')
//         } else {
//             $(this).removeClass('hide')
//         }
//     })

//     // 如果end-select當前小於start-select，則選第一個大於start-select的值
//     var $visibleOptions = $endSelect.find('option').not('.hide')
//     var currentEndValue = parseInt($endSelect.val())

//     if (currentEndValue < selectedValue) {
//         var $firstGreaterOption = $visibleOptions.filter(function () {
//             return parseInt($(this).val()) >= selectedValue
//         })

//         if ($firstGreaterOption.length > 0) {
//             $endSelect.val($firstGreaterOption.val())
//         } else {
//             $endSelect.val($visibleOptions.eq(0).val())
//         }
//     }
// }

// function handleStartSelectOptions($startSelect, $endSelect) {
//     var selectedValue = parseInt($endSelect.val())

//     $startSelect.find('option').each(function () {
//         var optionValue = parseInt($(this).val())
//         if (optionValue > selectedValue) {
//             $(this).addClass('hide')
//         } else {
//             $(this).removeClass('hide')
//         }
//     })

//     // 如果start-select當前大於end-select，則選第一個小於end-select的值
//     var $visibleOptions = $startSelect.find('option').not('.hide')
//     var currentStartValue = parseInt($startSelect.val())

//     if (currentStartValue > selectedValue) {
//         var $firstLesserOption = $visibleOptions.filter(function () {
//             return parseInt($(this).val()) <= selectedValue
//         })

//         if ($firstLesserOption.length > 0) {
//             $startSelect.val($firstLesserOption.val())
//         } else {
//             $startSelect.val($visibleOptions.eq(0).val())
//         }
//     }
// }




// JS版本
document.addEventListener('DOMContentLoaded', function () {
    setupSelectGroups()
})

function setupSelectGroups() {
    var selectGroups = document.querySelectorAll('.select-group')
    selectGroups.forEach(function (selectGroup) {
        var startSelect = selectGroup.querySelector('.start-select')
        var endSelect = selectGroup.querySelector('.end-select')

        startSelect.addEventListener('change', function () {
            handleEndSelectOptions(startSelect, endSelect)
        })

        endSelect.addEventListener('change', function () {
            handleStartSelectOptions(startSelect, endSelect)
        })
    })
}

function handleEndSelectOptions(startSelect, endSelect) {
    var selectedValue = parseInt(startSelect.value)
    var endOptions = endSelect.querySelectorAll('option')

    endOptions.forEach(function (option) {
        var optionValue = parseInt(option.value)
        if (optionValue < selectedValue) {
            option.classList.add('hide')
        } else {
            option.classList.remove('hide')
        }
    })

    var visibleEndOptions = endSelect.querySelectorAll('option:not(.hide)')
    var currentEndValue = parseInt(endSelect.value)

    if (currentEndValue < selectedValue) {
        var firstGreaterOption = Array.from(visibleEndOptions).find(function (option) {
            return parseInt(option.value) >= selectedValue
        })

        if (firstGreaterOption) {
            endSelect.value = firstGreaterOption.value
        } else {
            endSelect.value = visibleEndOptions[0].value
        }
    }
}

function handleStartSelectOptions(startSelect, endSelect) {
    var selectedValue = parseInt(endSelect.value)
    var startOptions = startSelect.querySelectorAll('option')

    startOptions.forEach(function (option) {
        var optionValue = parseInt(option.value)
        if (optionValue > selectedValue) {
            option.classList.add('hide')
        } else {
            option.classList.remove('hide')
        }
    })

    var visibleStartOptions = startSelect.querySelectorAll('option:not(.hide)')
    var currentStartValue = parseInt(startSelect.value)

    if (currentStartValue > selectedValue) {
        var firstLesserOption = Array.from(visibleStartOptions).find(function (option) {
            return parseInt(option.value) <= selectedValue
        })

        if (firstLesserOption) {
            startSelect.value = firstLesserOption.value
        } else {
            startSelect.value = visibleStartOptions[0].value
        }
    }
}
