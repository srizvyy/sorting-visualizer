import React from 'react'

export function SortingAlgo(array) {
    const animations = []
    if (array.length <= 1) return array
    const auxiiaryArray = array.slice()
    mergeSortHelper(array, 0, array.length -1, auxiiaryArray, animations)
    return animations 
}

function mergeSortHelper(
    mainArray, 
    startIdx,
    endIdx,
    auxiiaryArray,
    animations,
) {
    if (startIdx === endIdx) return 
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(auxiiaryArray, startIdx, middleIdx, mainArray, animations)
    mergeSortHelper(auxiiaryArray, middleIdx + 1, endIdx, mainArray, animations)
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiiaryArray, animations)
   
}

function doMerge(
    mainArray, 
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
) {
    let k = startIdx
    let i = startIdx
    let j = middleIdx + 1
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j])
        animations.push([i, j])
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]])
            mainArray[k++] = auxiliaryArray[i++]
        } else {
            animations.push([k, auxiliaryArray[j]])
            mainArray[k++] = auxiliaryArray[j++]
        }
    }

    while (i <= middleIdx) {
        animations.push([i, i])
        animations.push([i, i])
        animations.push([k, auxiliaryArray[i]])
        mainArray[k++] = auxiliaryArray[i++]
    }

    while (j <= endIdx) {
        animations.push([j, j])
        animations.push([j, j])
        animations.push([k, auxiliaryArray[j]])
        mainArray[k++] = auxiliaryArray[j++]
    }
}

