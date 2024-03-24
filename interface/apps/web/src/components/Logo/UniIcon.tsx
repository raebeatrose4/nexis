import styled from 'styled-components'

import HolidayUniIcon from './HolidayUniIcon'

// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
export type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
  height?: string | number
  width?: string | number
  gradientId?: string
  clickable?: boolean
}

export const UniIcon = ({ clickable, ...props }: SVGProps) => (
  <Container clickable={clickable}>
    {HolidayUniIcon(props) !== null ? (
      <HolidayUniIcon {...props} />
    ) : (
      <svg {...props} viewBox="0 0 103 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9676 89.2131C17.0572 89.3035 17.1578 89.3938 17.2473 89.4843L20.7816 84.4121C23.7121 78.5944 24.8529 73.2849 24.8864 68.7664C24.8417 66.3489 24.5061 63.954 23.9022 61.6269C23.4771 60.2262 23.164 58.7801 22.9626 57.3229C22.9626 57.3116 22.9626 57.2891 22.9626 57.2664C22.8284 56.2949 22.7389 55.3008 22.6943 54.3068C22.0791 38.2882 34.4046 24.5629 50.2199 23.6591L50.108 23.5575C53.8773 23.3202 59.3689 24.1562 63.9771 22.9362C68.753 21.5693 73.0926 18.9146 76.5375 15.2545C76.7052 15.0737 76.8955 14.9156 77.0967 14.78L80.3403 10.1371C66.7621 0.62546 48.8441 -1.98404 32.4026 4.80519C6.58822 15.4466 -5.78209 45.2243 4.76511 71.2968C7.40471 77.8149 11.2187 83.4858 15.8716 88.1513C16.2294 88.5128 16.5874 88.8629 16.9565 89.2131H16.9676Z" fill="url(#paint0_linear_351_435)" stroke="white" stroke-width="0.300037" stroke-miterlimit="10"/>
<path d="M82.7107 18.9597C82.6324 19.1969 82.5429 19.4454 82.4087 19.6713C79.3552 25.4438 78.0579 34.1648 78.3374 37.6103C78.7961 43.3376 80.5297 47.0542 79.9929 51.4373C80.3955 67.3316 68.0923 80.8309 52.4 81.7008C52.4 81.7008 52.3777 81.7008 52.3665 81.7008C48.9104 81.9268 48.5078 81.5879 45.3426 81.7346C38.8106 82.0283 31.8426 84.7847 27.0107 89.936L23.7783 94.5788C24.7067 95.2002 25.6462 95.7876 26.5969 96.3751C27.0331 96.6236 27.4693 96.8608 27.9056 97.098C40.6673 103.899 56.2029 105.152 70.5977 99.2105C96.412 88.5578 108.782 58.78 98.2351 32.7075C95.3494 25.5795 91.0433 19.4566 85.7865 14.554L82.7107 18.9597Z" fill="url(#paint1_linear_351_435)" stroke="white" stroke-width="0.300037" stroke-miterlimit="10"/>
<defs>
<linearGradient id="paint0_linear_351_435" x1="40.6702" y1="1" x2="40.6702" y2="89.4843" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0.45"/>
</linearGradient>
<linearGradient id="paint1_linear_351_435" x1="62.8893" y1="14.554" x2="62.8893" y2="103.016" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.45"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

    )}
  </Container>
)

const Container = styled.div<{ clickable?: boolean }>`
  position: relative;
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'auto')};
`
