<template>

  <!--addAviso start-->
  <div data-role="page" id="addNoticePage">
    <div id="add-notice">
      <div class="form-wrap gray-back" data-role="content">
        <div class="form-item">
          <div class="form-label">
            <div class="text">通知主题<span></span></div>
          </div>
          <div class="form-input">
            <input type="text" id="title" spellcheck="false" name="title" data-role="none" />
            <span class="form-error"></span>
          </div>
        </div>

        <div class="form-item-horizontal" id="unitSnList">
          <div class="form-label">
            <div class="text">发送单位<span></span></div>
          </div>
          <div class="form-select-wrap">
            <select type="select" data-role="none" class="selectpicker" multiple></select>
          </div>
          <span class="form-error"></span>
        </div>

        <div class="form-item-horizontal" id="unitSnList2">
          <div class="form-label">
          </div>
          <div class="form-select-wrap">
            <select type="select" data-role="none" class="selectpicker" multiple data-actions-box="true"></select>
          </div>
          <span class="form-error"></span>
        </div>

        <div class="form-item" name="departmentList">
          <div class="form-label">
            <div class="text">部门<span></span></div>
          </div>
          <div class="form-select-wrap">
            <select type="select" id="departmentList" data-role="none" class="selectpicker" multiple data-actions-box="true"></select>
          </div>
          <span class="form-error"></span>
        </div>

        <div class="form-item" name="personalTypeList">
          <div class="form-label">
            <div class="text">人员类别<span></span></div>
          </div>
          <div class="form-select-wrap">
            <select type="select" id="personalTypeList" class="selectpicker" multiple data-actions-box="true"></select>
          </div>
          <span class="form-error"></span>
        </div>

        <div class="form-item">
          <div class="form-label">
            <div class="text">文号<span></span></div>
          </div>
          <input type="text" id="noticeRef" spellcheck="false" name="filrCode" data-role="none" />
          <span class="form-error"></span>
        </div>

        <div class="form-item" name="noticeType">
          <div class="form-label">
            <div class="text">通知分类<span></span></div>
          </div>
          <div class="form-radio" id="noticeType" type="radio-group">
            <label for="weaponGroup">
              <span class="radio">
                <input type="radio" name="weap" id="weaponGroup" value="1">
                <span class="radio-inner"></span>
              </span>
              <span>兵器集团</span>
            </label>
            <label for="techGroup">
              <span class="radio">
                <input type="radio" name="weap" id="techGroup" value="2">
                <span class="radio-inner"></span>
              </span>
              <span>科工局</span>
            </label>
            <label for="other">
              <span class="radio">
                <input type="radio" name="weap" id="other" value="3">
                <span class="radio-inner"></span>
              </span>
              <span>其他</span>
            </label>
          </div>
          <span class="form-error"></span>
        </div>

        <div class="form-item">
          <div class="form-label">
            <div class="text">截止日期<span></span></div>
          </div>
          <input type="date" id="endTime" spellcheck="false" name="endTime" data-role="none" />
          <span class="form-error"></span>
        </div>

        <div class="form-item" name="isShare">
          <div class="form-radio" id="isShare" type="radio-single" style="margin:0 auto">
            <label for="share">
              <span class="radio">
                <input type="radio" name="share" id="share" value="0">
                <span class="radio-inner"></span>
              </span>
              <span>允许分享到外部APP并下载附件</span>
            </label>
          </div>
          <span class="form-error"></span>
        </div>

        <div class="form-item" name="examine">
          <div class="form-label">
            <div class="text">审核对象<span></span></div>
          </div>
          <div class="form-select-wrap">
            <select type="select" id="examine" data-role="none" class="selectpicker">
              <option id='5' value='5'>安全管理部门负责人</option>
              <option id='6' value='6'>企业主管安全领导</option>
              <option id='7' value='7'>两个都选</option>
            </select>
          </div>
          <span class="form-error"></span>
        </div>
      </div>

      <div class="content-title"><span></span>通知内容</div>
      <div id="noticeContent" class="form-wrap"></div>

      <div class="content-title"><span></span>补充附录</div>
      <div class="form-wrap" data-role="content">
        <!--上传下载-->
        <form id="uploadForm" method="post" enctype="multipart/form-data">
          <div class="form-upload">
            <div class="fileList" id="informFilelist" type="fileList">
              <label for="fileinp"><div class="glyphicon glyphicon-plus upload saming-upload"></div></label>
            </div>
            <span class="fileerrorTip"></span>
            <input type="file" id="fileinp" name="file" accept="image/*,application/pdf" />
          </div>
        </form> 
        <!--上传下载-->
      </div>

      <div class="add-notice-btn">
        <button class="btn btn-primary" id="tempStore">暂存草稿箱</button>
        <button class="btn btn-primary" id="preView">预览</button>
        <button class="btn btn-primary" id="sendNowT" data-toggle="modal" data-target="#myModal">提交</button>
      </div>
    </div>
  </div>
  <!--addAviso end-->
</template>
