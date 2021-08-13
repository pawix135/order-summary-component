import styled from "styled-components"

import hero from '../images/illustration-hero.svg'
import icon_music from '../images/icon-music.svg'

const colors = {
  pale_blue: "hsl(225, 100%, 94%)",
  bright_blue: "hsl(245, 75%, 52%)",
  very_pale_blue: "hsl(225, 100%, 98%)",
  desaturated_blue: "hsl(224, 23%, 55%)",
  dark_blue: "hsl(223, 47%, 23%)"
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* height: 80%; */
  width: 80;
  border-radius: 15px;
  background-color: white;
`

const IllustrationWrapper = styled.section`
  width: 100%;
  height: 100%;
  img{
    border-radius: 15px 15px 0px 0px;
  }
`

const OrderSummarySection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 20px auto;
  width: 80%;
  height: auto;
  p{
    padding: 0;
    margin: 0;
    text-align: center;
    color: ${colors.desaturated_blue};
  }
  h2{
    justify-self: center;
    color: ${colors.dark_blue};
    font-weight: 900;
  }
`

const PlanWrapper = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  width: 80%;
  margin: 15px auto 20px auto;
  border-radius: 15px;
  background-color: ${colors.very_pale_blue};
`

const MusicSvg = styled.img`
  background-color: ${colors.desaturated_blue};
  border-radius: 50%;
`

const IconSection = styled.section`
  width: 70%;
  display: flex;
  flex-flow: row nowrap;
  padding-left: 15px;
`

const ChangeSection = styled.section`
  width: 30%;
  padding-right: 20px;
  text-align: right;

  a{
    color: ${colors.bright_blue};
    font-weight: 600;

    :hover{
      filter: opacity(0.7);
    }
  }
`

const AnnualWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding-left: 15px;

  span{
    font-weight: 900;
    color: ${colors.dark_blue};
  }
  p{
    margin: 0;
    padding-top: 5px;
    color: ${colors.desaturated_blue};
  }
`

const ProceedButton = styled.button`
  width: 80%;
  margin: 15px auto;
  background-color: ${colors.bright_blue};
  color: white;
  outline: none;
  border-radius: 10px;
  border: none;
  height: 50px;
  font-weight: bold;
  letter-spacing: 1.1px;

  :hover{
    filter: opacity(0.7);
    cursor: pointer;
  }
`

const CancelOrder = styled.a`
  color: ${colors.desaturated_blue};
  width: 100%;
  text-align: center;
  margin: 15px 0px 50px 0px;
  text-decoration: none;
`

const Summary = () => {
  return (
    <Wrapper>
      <IllustrationWrapper>
        <img src={hero} alt="beyeska" />
      </IllustrationWrapper>
      <OrderSummarySection>
        <h2>
          Order Summary
        </h2>
        <p>
          You can now listen to millions of songs, <br/> audiobooks, and podcasts on any 
          device <br /> anywhere you like!
        </p>
      </OrderSummarySection>
      <PlanWrapper>
        <IconSection>
          <MusicSvg src={icon_music} alt="music-icon" />
          <AnnualWrapper>
            <span>Annual Plan</span>
            <p>$59.99/year</p>
          </AnnualWrapper>
        </IconSection>
        <ChangeSection>
          <a href="!#">Change</a>
        </ChangeSection>
      </PlanWrapper>
      <ProceedButton>Proceed to Payment</ProceedButton>
      <CancelOrder href="!#">Cancel Order</CancelOrder>
    </Wrapper>
  )
}

export default Summary
