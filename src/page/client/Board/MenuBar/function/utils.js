

export const makeCalendar = (year, month) => {
    let beforeDate = new Date(year, month, 0);
    let currentDate = new Date(year, month, 1);
    let afterDate = new Date(year, month + 1, 0);
    
    let startDate = currentDate.getDay();
    let dateArr = []; 
    
    let firstWeek = [];
    let midWeek = [];
    let lastWeek = [];

    let day = 1;

    let disabledColor = "#828282";
    let activeColor = "#000";
    let saturdayColor = "#1263CE";
    let sundayColor = "#CE1117";
    let weekColor = [
        sundayColor,
        activeColor,
        activeColor,
        activeColor,
        activeColor,
        activeColor,
        saturdayColor
    ];

    for(let i = 0; i < startDate; i ++) {
        firstWeek.push({
            day:beforeDate.getDate() - startDate + i + 1,
            color: disabledColor
        } );
    }
    
    for(let i = startDate; i < 7; i ++) {
        let compareDate = new Date(year, month, day).getDay();

        firstWeek.push({
            day: day,
            color: weekColor[compareDate]
        });
        day += 1;
    }
    dateArr.push(firstWeek);
    
    let trigger = false;
    for(let i = firstWeek[6].day + 1; i <= afterDate.getDate(); i ++) {
        let compareDate = new Date(year, month, i).getDay();
        trigger = false;
        midWeek.push({
            day:i,
            color: weekColor[compareDate]
        });

        if(midWeek.length === 7) {
            trigger = true;
            dateArr.push(midWeek);
            midWeek = [];
        }
    }

    day = 1;
    if(trigger) { //마지막까지 꽉꽉 채웠을 때
    } else { //아닐때
        for(let i = midWeek.length; i < 7; i ++) {
            midWeek.push({
                day:day,
                color: disabledColor
            });
            day += 1;
        }
        dateArr.push(midWeek);
    }

    if(dateArr.length !== 6) {
        for(let i = day; i < day + 7; i ++) {
                lastWeek.push({
                day:i,
                color:disabledColor
            });
        }
        dateArr.push(lastWeek);
    }
    return dateArr;
}