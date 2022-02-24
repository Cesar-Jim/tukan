const screenSizes = ['320px', '480px', '768px', '960px', '1024px', '1328px'];
const breakpoints = [];

breakpoints.xs = screenSizes[0];
breakpoints.sm = screenSizes[1];
breakpoints.md = screenSizes[2];
breakpoints.lg = screenSizes[3];
breakpoints.xl = screenSizes[4];
breakpoints.xxl = screenSizes[5];

export default breakpoints;

/*

MEDIA QUERIES:
1 - phone-small             =  320px -  479.98px
2 - phone                   =  480px -  767.98px
3 - tablet                  =  768px -  959.98px
4 - laptop                  =  960px - 1023.98px
5 - desktop                 = 1024px - 1327.98px
5 - large desktop           = 1328px - and larger

BREAKPOINT ALIASES:
xs:  '320px'
sm:  '480px'
md:  '768px'
lg:  '960px'
xl:  '1024px'
xxl: '1328px'

*/
