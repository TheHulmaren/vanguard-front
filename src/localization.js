import { createI18n } from "vue-i18n";

const messages = {
  English: {
    header: {
      title: "VANGUARD WEB ART.",
      subtitle: {
        home: "Home",
        crews: "Crews",
        portfolios: "Portfolios",
        portfolioDetail: "In Detail",
        contactUs: "Contact Us",
      },
    },
    home: {
      commitment: {
        button: "Commitment",
        content:
          "We commit to providing an *unparalleled* web experience for every customer, ensuring *satisfaction* and *success*.",
      },
      justForYou: {
        button: "Just for You",
        content:
          "Crafting *tailor-made websites* that seamlessly align with your business's *unique characteristics*, *strategic direction*, and *core values*.",
      },
      seo: {
        button: "Full SEO",
        content:
          "Unlock your website's full potential with our *expert SEO strategies*, elevating your online presence.",
      },
      innovation: {
        button: "Innovation",
        content:
          "Continually *innovating* with original designs and layouts through relentless *exploration* and *experimentation*.",
      },
    },
    contact: {
      form: {
        name: "Your Name",
        contactType: "Category",
        yourEmail: "Your Email (necessary)",
        yourPhone: "Your Phone",
        description: "Description",
        attachments: "Attachments",
        transfer: 'Transfer'
      },
      transfer:{
        error:"Error! Be sure to check the internet connection and to fill in the Email field, then try again.",
        transferring:'Transferring...',
        success: "Transfered successfully!"
      }
    },
    sidebar:{
      nav:{
        home:'HOME',
        portfolio:'PORTFOLIOS',
        crews: 'CREWS',
        contact: 'CONTACT US'
      },
      subscription:{
        label: 'Keep In Touch With Us',
        button: 'Subscribe',
        success: 'Thank you for your subscription!',
        error: 'Error! Subscription failed. Check the internet connection, and avoid registering duplicate emails.'
      }
    }
  },
  한국어: {
    header: {
      title: "뱅가드 웹 아트.",
      subtitle: {
        home: "홈",
        crews: "크루",
        portfolios: "포트폴리오",
        portfolioDetail: "디테일",
        contactUs: "문의하기",
      },
    },
    home: {
      commitment: {
        button: "저희의 약속",
        content:
          "저희는 모든 고객께 *최상의 웹 이용 경험*을 전달하므로서, 고객의 *만족과 성공*을 이끌어낼 것을 약속드립니다.",
      },
      justForYou: {
        button: "맞춤형 디자인",
        content:
          "고객님 비즈니스의 *고유한 니즈와 가치*에 부합하는, 세심하게 *맞춤 제작된 웹사이트*를 선사해 드립니다.",
      },
      seo: {
        button: "SEO 지원",
        content:
          "Google, Bing 등의 *검색엔진에 효과적으로 노출*될 수 있도록, 완벽히 *SEO를 지원*합니다.",
      },
      innovation: {
        button: "끊임없는 혁신",
        content:
          "저희는 현재에 안주하지 않습니다. 언제나 *새로운 기술과 디자인*을 연구하며, 그 에센스를 여러분의 웹사이트에 접목합니다.",
      },
    },
    contact: {
      form: {
        name: "성함",
        contactType: "문의 종류",
        yourEmail: "이메일 (필수)",
        yourPhone: "전화번호",
        description: "내용",
        attachments: "첨부 파일",
        transfer: '보내기'
      },
      transfer:{
        error:"에러가 발생했습니다! 인터넷 연결을 확인해주세요. 혹은, 이메일란이 비어있지는 않은가요?",
        transferring:'보내는 중...',
        success: "성공적으로 전달되었습니다!"
      }
    },
    sidebar:{
      nav:{
        home:'홈',
        portfolio:'포트폴리오',
        crews: '크루',
        contact: '문의하기'
      },
      subscription:{
        label: '저희 소식을 메일로 받아보세요!',
        button: '구독하기',
        success: '구독해 주셔서 감사합니다!',
        error: '에러가 발생했습니다! 인터넷 연결을 확인해 주세요. 또, 혹시 중복된 이메일은 아닌지 확인해 주세요.'
      }
    }
  },
};

export const i18n = createI18n({
  locale: "한국어",
  fallbackLocale: "English",
  messages: messages,
});
