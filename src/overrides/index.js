export default function registerOverrides(current_app){
    // console.log(current_app)
}
(global => {
    const _parse = JSON.parse;
    JSON.parse = function(text,defaults=null){
        try{
            return _parse(text);
        }catch(error){
            /**
             * if we catch the error
            */
            return defaults;
        }
    }
})((0,eval('this')));