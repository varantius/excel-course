export class DomListener{
  constructor($root){
    if(!$root){
      throw new Error(`No ${$root} provide!`)
    }
    this.$root = $root
  }
}