export const randomColor = () => {
    const colors = ['#253377', '#BF4D9C', '#4965C0', '#2A5724', '#6BE605', '#820713', '#CEFFBC', '#77C4D4', '#CC8398', '#904B97'];
    return colors[randomNumber(colors.length)];

}

export const flName = (name) => {
    const fullName = name.split(" ");
    const flName = fullName[0].charAt(0) + "" + fullName[1].charAt(0);
    return flName;
}

const randomNumber = (max, min = 1) => {
    return Math.floor(Math.random() * (max-1)) + min;
}