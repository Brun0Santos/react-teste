import React from "react";

const [itensPerPage, setItensPerPage] = useState(2)
const [currentPage, setCurrentPage] = useState(0)

const pages = Math.ceil(itens.length / itensPerPage)
const startIndex = currentPage * itensPerPage
const endIndex = startIndex + itensPerPage
const currentItens = itens.slice(startIndex, endIndex)
