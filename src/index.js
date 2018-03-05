module.exports =
    function longestConsecutiveLength(array) {
        let clone = [];
        let result = 0;
        let bufResult = 0;
        if (array.length == 1)
            return 1;

        for (let i = 0; i < array.length; i++)
            clone[array[i]] = array[i];

        for (i = 0; i < clone.length; i++) {
            if (typeof(clone[i]) !== 'undefined')
                bufResult++;
            else {
                if (result < bufResult)
                    result = bufResult;
                bufResult = 0;
            }

        }

        return result;


    }