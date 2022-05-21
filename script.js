function DownloadInfo() {
   let abc=document.createElement('a');
   abc.target='_blank';
   abc.href='assets/Details.pdf';
      if (window.confirm('Click Ok to Download Info!'))
      {
        abc.click();
      };
  }