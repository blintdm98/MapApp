import styled from "styled-components"

export const FooterSection = styled.footer`
margin: auto;
box-sizing: content-box;
`
export const FooterElements = styled.div`
border-top: 1px solid rgba(255, 255, 255, 0.1);
display: grid;
grid-template-columns: repeat(2, minmax(85px, 220px));
gap: 40px;
padding: 2vw 0 0.5vw;

@media screen and (max-width: 1024px) {
	padding: 2vw 0;
}

@media screen and (max-width: 768px) {
	width: 100%;
	padding: 2vw 0;
	gap: 16px;
}

@media screen and (max-width: 640px) {
	width: 100%;
	gap: 20vw;
}
`
export const FooterContent = styled.a`
    font-size: 18px;
    line-height: 30px;
    color: rgba(255, 255, 255, 0.75);
    transition: .3s ease;
    position: relative;
    left: 0;

    &:hover {
        color: #fff;
        left: 6px;
    }
`

export const FooterTitle = styled.div`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
`

export const FooterItem = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`