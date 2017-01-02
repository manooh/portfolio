import React, { Component } from 'react';
import './InfoPages.scss';

const Developer = () => {
  return (
    <div id="Developer">Developer
      <p>


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu lectus blandit mi imperdiet luctus et eu arcu. Vivamus pretium volutpat scelerisque. Nam non nunc ut justo ultrices ultricies et consequat neque. Nullam pellentesque fermentum vulputate. Sed turpis urna, scelerisque eget congue sit amet, venenatis a leo. Nunc ex justo, dignissim eu suscipit id, lacinia ac nisi. Pellentesque posuere quis neque eget pretium. Sed ut tellus at mi pharetra tincidunt et vitae neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur quis fermentum neque.

Phasellus eleifend ex mi, ut maximus nunc finibus a. Fusce ullamcorper viverra dui, eget mattis sapien gravida vitae. Curabitur vitae neque rutrum, rutrum ante et, luctus nisi. Aenean vel mi facilisis, luctus dui hendrerit, gravida sapien. Vestibulum semper blandit ligula, non placerat metus faucibus at. Vestibulum congue magna porttitor metus volutpat, vitae placerat ante pretium. Sed id blandit lorem. Aenean at leo non libero malesuada vehicula at eu leo. Duis a varius enim, molestie rutrum nibh. Vestibulum auctor neque nisl, nec ornare lorem volutpat at. Ut et magna eu massa molestie porttitor fringilla et dolor. Integer at lacinia nisi, eget varius mi. Cras posuere neque at maximus aliquam. Praesent eget luctus mauris.

Nunc molestie mattis erat ut blandit. Nam urna ligula, cursus a turpis ac, volutpat auctor enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis bibendum dolor et ultricies porttitor. Duis ultrices dolor in elementum efficitur. Nam consectetur, nulla ut rutrum pellentesque, dolor odio pulvinar sapien, sed pellentesque ipsum velit sed risus. Phasellus quis purus ornare, suscipit dolor at, consectetur nisi. Donec sodales felis metus, a imperdiet felis auctor id.

Quisque auctor erat et justo posuere feugiat. Suspendisse lacinia consequat molestie. Proin eu mi suscipit, tincidunt ante eu, feugiat nibh. Phasellus tempus vestibulum consequat. Nulla nunc turpis, molestie ac pharetra et, imperdiet at tellus. Sed fermentum faucibus risus, in porttitor magna vehicula in. Vestibulum eu nibh justo. Nam mattis sit amet velit vel scelerisque. Phasellus faucibus, lorem sit amet ultrices tincidunt, sapien lacus semper diam, in laoreet ipsum est sit amet neque. Quisque nunc diam, aliquet sed massa sit amet, tincidunt consectetur ante.

Ut varius neque eget erat bibendum, eu maximus est consectetur. Aenean non ipsum vel turpis dapibus porttitor. Etiam non mollis eros, ut cursus massa. Quisque ut mi vestibulum purus lobortis sagittis. Pellentesque eu ornare orci. Curabitur congue convallis condimentum. Morbi eget mauris id nisi efficitur consequat. Duis tincidunt sapien turpis, quis ultrices nibh sodales ac. Quisque id vulputate risus, quis fermentum purus. Nulla lobortis nisl et turpis tristique placerat. Phasellus vel ante orci. Curabitur vel rhoncus eros. Mauris placerat mollis sem nec ultrices.
      </p>
    </div>
  );
};

const Designer = () => {
  return (
    <div id="Designer">Designer</div>
  );
};

const Teacher = () => {
  return (
    <div id="Teacher">Teacher</div>
  );
};

const More = () => {
  return (
    <div id="More">More</div>
  );
};


export class InfoPage extends Component {

  render() {
    return(
      <div className='info-page'>
        <div className='info-page-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
};

const InfoPages = { Developer, Designer, Teacher, More };
export default InfoPages;
