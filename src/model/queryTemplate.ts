import AtomModel from '../model/atom'
import DefinitionModel from '../model/definition'
import ConceptRelationModel from '../model/conceptrelation'

class UMLSQueryTemplate {
    apikey: string
    term: string
    id: any
    version: string
    results: Array<any>
    result: any
    pageNumber: number
    pageSize: number
    pageCount: number
    sabs: any
    ttys: any
    language: string
    includeObsolete: boolean
    includeSuppressible: boolean
    atoms: Array<typeof AtomModel>
    atom: typeof AtomModel
    definitions: Array<typeof DefinitionModel>
    definition: typeof DefinitionModel
    relations: Array<typeof ConceptRelationModel>
    relation: typeof ConceptRelationModel
    
    constructor(apikey){
        this.apikey = apikey
        this.results = []
        this.version = 'current'
        this.pageNumber = 1
        this.pageSize = 25
        this.pageCount = 1
        this.includeObsolete = false
        this.includeSuppressible = false
    }

    async init(term, id=null) {
        this.term = term
        this.id = id
    } 

    fillParams(params): any{
        params.pageNumber = this.pageNumber
        params.pageSize = this.pageSize
        params.pageCount = this.pageCount
        params.includeObsolete = this.includeObsolete
        params.includeSuppressible = this.includeSuppressible
        if(this.ttys)
            params.ttys = encodeURIComponent(this.ttys)
        if(this.sabs)
            params.sabs = encodeURIComponent(this.sabs)
        return params
    }

    // @Override
    query() {

    }

    nextPage(pageNumber=1){
        if(this.pageNumber)
            this.pageNumber = this.pageNumber + pageNumber
        else
            this.pageNumber = pageNumber
    }

    getResults(): Array<any> {
        return this.results
    }

    getResult(): any {
        return this.result
    }

    setVersion(version: string){
        this.version = version
    }

    setPageNumber(pageNumber: number){
        this.pageNumber = pageNumber
    }
    
    setPageSize(pageSize: number){
        this.pageSize = pageSize
    }

    setIncludeObsolete(includeObsolete: boolean){
        this.includeObsolete = includeObsolete
    }

    setIncludeSuppressible(includeSuppressible: boolean){
        this.includeSuppressible = includeSuppressible
    }

    setLanguage(language: string){
        this.language = language
    }

    SetSabs(sabs: any){
        this.sabs = sabs
    }

    SetTtys(ttys: any){
        this.ttys = ttys
    }
    
}

export default UMLSQueryTemplate;