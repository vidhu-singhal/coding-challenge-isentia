import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem, MessageService, SelectItem, TreeNode} from 'primeng/api';
import {Tree} from 'primeng/primeng';
import {NodeService} from '../../services/node.service';
import {animate, animateChild, group, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-qa-checklist',
  templateUrl: './qa-checklist.component.html',
  styleUrls: ['./qa-checklist.component.css'],
  animations: [
    trigger('bubbleAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        group([
          query(':enter', stagger('40ms', [
            animate('200ms ease-in', keyframes([
              style({opacity: 0.5, transform: 'scale(0.2)', offset: 0, position: 'relative', top: '20px'}),
              style({opacity: 1.0, transform: 'scale(1.0)', offset: 1.0, position: 'unset', top: '0px'}),
            ])), animateChild()
          ]), {optional: true}),
        ])

      ])
    ])
  ]
})
export class QaChecklistComponent implements OnInit {

  @ViewChild('expandingTree', { static: false })
  expandingTree: Tree;

  nodes: TreeNode[];

  selectedNodes: TreeNode[];
  table: TreeNode[];

  selectedNode: TreeNode;

  selectedNodeForComments: TreeNode;

  tags: SelectItem[];

  selectedTags: string[] = [];

  steps: MenuItem[];

  activeIndex = 0;

  displayResults = false;

  constructor(private nodeService: NodeService, private messageService: MessageService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.nodeService.getGuidelineNodes().then(nodes => this.nodes = nodes);

    this.tags = [
      {label: 'All', value: 'All'},
      {label: 'Frontend', value: 'Frontend'},
      {label: 'Jira Frontend', value: 'Jira Frontend'},
      {label: 'Backend', value: 'Backend'}
    ];

    this.steps = [
      {
        label: 'Planning',
        command: (event: any) => {
          this.activeIndex = 0;
          // this.messageService.add({severity: 'info', summary: 'Planning', detail: event.item.label});
        }
      },
      {
        label: 'Development',
        command: (event: any) => {
          this.activeIndex = 1;
          // this.messageService.add({severity: 'info', summary: 'Development', detail: event.item.label});
        }
      },
      {
        label: 'QA',
        command: (event: any) => {
          this.activeIndex = 2;
          // this.messageService.add({severity: 'info', summary: 'QA', detail: event.item.label});
        }
      },
      {
        label: 'Rollout',
        command: (event: any) => {
          this.activeIndex = 3;
          // this.messageService.add({severity: 'info', summary: 'Rollout', detail: event.item.label});
        }
      }
    ];
  }

  expandAll(nodes: TreeNode[]) {
    nodes.forEach( node => {
      this.expandRecursive(node, true);
    } );
  }

  collapseAll(nodes: TreeNode[]) {
    nodes.forEach( node => {
      this.expandRecursive(node, false);
    } );
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach( childNode => {
        this.expandRecursive(childNode, isExpand);
      } );
    }
  }

  onSelectNode(event, node, overlayPanel) {
    this.selectedNode = node;
    overlayPanel.toggle(event);
  }

  onEdit(event, node, overlayPanel) {
    event.preventDefault();
    event.stopPropagation();
    this.selectedNodeForComments = node;
    overlayPanel.toggle(event);
  }

  onNodeSelected(event) {
    // this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    event.node.selected = true;
  }

  onNodeUnselected(event) {
    // this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    event.node.selected = false;
  }

  getSafeValue(value) {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }

  prepareSummary() {
    this.table = [];

    this.nodes.forEach(node => {
      if (node['selected'] === true) {
        this.table.push({
          data: node
        });
      }
    });

    this.expandAll(this.table);

    this.displayResults = true;
  }

  // onStepChange(index) {
  //
  // }
}
