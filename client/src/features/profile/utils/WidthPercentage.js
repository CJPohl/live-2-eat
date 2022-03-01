// Create percentage number to create css meter %
export const WidthPercentage = (id, num, den) => {
    const el = document.getElementById(id);
    const dec = num / den;
    let percentage = (dec!==0) ? Math.floor(dec * 100) : 1;
    if (percentage > 100) percentage = 100;
    el.style.width = `${percentage}%`;
}