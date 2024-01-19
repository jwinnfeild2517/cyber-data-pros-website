import React from 'react'
import CarouselWrapper from '../carousel/CarouselWrapper'
import FeedbackCard from './FeedbackCard'
import feedbackArray from '@/data/feedback'

const FeedbackCarousel = () => {
  return (
    <CarouselWrapper
      header="Client Feedback"
      subheader="What our happy clients say"
      maxWidth={800}
      style={{
        backgroundColor: '#001a58',
        borderTop: '5px solid #b58500',
        height: 561,
      }}
      settings={{
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
      }}
    >
      {feedbackArray.map(({ feedbacktext, clientname, clienttitle }, index) => (
        <FeedbackCard
          key={index}
          text={feedbacktext}
          name={clientname}
          title={clienttitle}
        />
      ))}
    </CarouselWrapper>
  )
}

export default FeedbackCarousel
